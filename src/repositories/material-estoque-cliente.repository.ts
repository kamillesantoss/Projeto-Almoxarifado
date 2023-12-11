import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {MaterialEstoqueCliente, MaterialEstoqueClienteRelations} from '../models';

export class MaterialEstoqueClienteRepository extends DefaultCrudRepository<
  MaterialEstoqueCliente,
  typeof MaterialEstoqueCliente.prototype.codMaterial,
  MaterialEstoqueClienteRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(MaterialEstoqueCliente, dataSource);
  }
}
