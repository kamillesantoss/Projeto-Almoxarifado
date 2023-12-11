import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {BackupSolicitacao, BackupSolicitacaoRelations} from '../models';

export class BackupSolicitacaoRepository extends DefaultCrudRepository<
  BackupSolicitacao,
  typeof BackupSolicitacao.prototype.codigo,
  BackupSolicitacaoRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(BackupSolicitacao, dataSource);
  }
}
