import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {EstoqueDpa, EstoqueDpaRelations} from '../models';

export class EstoqueDpaRepository extends DefaultCrudRepository<
  EstoqueDpa,
  typeof EstoqueDpa.prototype.codigo,
  EstoqueDpaRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(EstoqueDpa, dataSource);
  }
}
