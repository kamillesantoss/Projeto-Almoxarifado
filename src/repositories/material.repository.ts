import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {Material, MaterialRelations} from '../models';

export class MaterialRepository extends DefaultCrudRepository<
  Material,
  typeof Material.prototype.codigo,
  MaterialRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(Material, dataSource);
  }
}
