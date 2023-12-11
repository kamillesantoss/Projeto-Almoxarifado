import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {Solicitacao, SolicitacaoRelations} from '../models';

export class SolicitacaoRepository extends DefaultCrudRepository<
  Solicitacao,
  typeof Solicitacao.prototype.codigo,
  SolicitacaoRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(Solicitacao, dataSource);
  }
}
