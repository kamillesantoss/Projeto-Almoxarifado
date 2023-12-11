import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {EstoqueCliente, EstoqueClienteRelations} from '../models';

export class EstoqueClienteRepository extends DefaultCrudRepository<
  EstoqueCliente,
  typeof EstoqueCliente.prototype.codigo,
  EstoqueClienteRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(EstoqueCliente, dataSource);
  }
}
