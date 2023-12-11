import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {DescricaoMaterial, DescricaoMaterialRelations} from '../models';

export class DescricaoMaterialRepository extends DefaultCrudRepository<
  DescricaoMaterial,
  typeof DescricaoMaterial.prototype.codMaterial,
  DescricaoMaterialRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(DescricaoMaterial, dataSource);
  }
}
