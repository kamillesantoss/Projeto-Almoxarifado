import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AlmoxarifadoDataSource} from '../datasources';
import {SolicitacaoAprovada, SolicitacaoAprovadaRelations} from '../models';

export class SolicitacaoAprovadaRepository extends DefaultCrudRepository<
  SolicitacaoAprovada,
  typeof SolicitacaoAprovada.prototype.codigo,
  SolicitacaoAprovadaRelations
> {
  constructor(
    @inject('datasources.Almoxarifado') dataSource: AlmoxarifadoDataSource,
  ) {
    super(SolicitacaoAprovada, dataSource);
  }
}
