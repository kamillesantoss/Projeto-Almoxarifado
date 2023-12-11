import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {MaterialEstoqueDpa, MaterialEstoqueDpaRelations} from '../models';

export class MaterialEstoqueDpaRepository extends DefaultCrudRepository<
  MaterialEstoqueDpa,
  typeof MaterialEstoqueDpa.prototype.codMaterial,
  MaterialEstoqueDpaRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(MaterialEstoqueDpa, dataSource);
  }
}
