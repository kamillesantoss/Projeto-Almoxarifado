import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {MaterialSolicitacao, MaterialSolicitacaoRelations} from '../models';

export class MaterialSolicitacaoRepository extends DefaultCrudRepository<
  MaterialSolicitacao,
  typeof MaterialSolicitacao.prototype.codigoSolicitacao,
  MaterialSolicitacaoRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(MaterialSolicitacao, dataSource);
  }
}
