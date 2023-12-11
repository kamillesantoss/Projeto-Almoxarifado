import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {AdmDpa, AdmDpaRelations} from '../models';

export class AdmDpaRepository extends DefaultCrudRepository<
  AdmDpa,
  typeof AdmDpa.prototype.codigo,
  AdmDpaRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(AdmDpa, dataSource);
  }
}
