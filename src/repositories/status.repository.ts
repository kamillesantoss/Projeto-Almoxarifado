import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {Status, StatusRelations} from '../models';

export class StatusRepository extends DefaultCrudRepository<
  Status,
  typeof Status.prototype.codigo,
  StatusRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(Status, dataSource);
  }
}
