import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {CategoriaMaterial, CategoriaMaterialRelations} from '../models';

export class CategoriaMaterialRepository extends DefaultCrudRepository<
  CategoriaMaterial,
  typeof CategoriaMaterial.prototype.codigo,
  CategoriaMaterialRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(CategoriaMaterial, dataSource);
  }
}
