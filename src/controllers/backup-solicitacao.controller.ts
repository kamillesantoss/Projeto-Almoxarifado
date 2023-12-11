import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {BackupSolicitacao} from '../models';
import {BackupSolicitacaoRepository} from '../repositories';

export class BackupSolicitacaoController {
  constructor(
    @repository(BackupSolicitacaoRepository)
    public backupSolicitacaoRepository : BackupSolicitacaoRepository,
  ) {}

  @post('/backup-solicitacaos')
  @response(200, {
    description: 'BackupSolicitacao model instance',
    content: {'application/json': {schema: getModelSchemaRef(BackupSolicitacao)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BackupSolicitacao, {
            title: 'NewBackupSolicitacao',
            
          }),
        },
      },
    })
    backupSolicitacao: BackupSolicitacao,
  ): Promise<BackupSolicitacao> {
    return this.backupSolicitacaoRepository.create(backupSolicitacao);
  }

  @get('/backup-solicitacaos/count')
  @response(200, {
    description: 'BackupSolicitacao model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(BackupSolicitacao) where?: Where<BackupSolicitacao>,
  ): Promise<Count> {
    return this.backupSolicitacaoRepository.count(where);
  }

  @get('/backup-solicitacaos')
  @response(200, {
    description: 'Array of BackupSolicitacao model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(BackupSolicitacao, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(BackupSolicitacao) filter?: Filter<BackupSolicitacao>,
  ): Promise<BackupSolicitacao[]> {
    return this.backupSolicitacaoRepository.find(filter);
  }

  @patch('/backup-solicitacaos')
  @response(200, {
    description: 'BackupSolicitacao PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BackupSolicitacao, {partial: true}),
        },
      },
    })
    backupSolicitacao: BackupSolicitacao,
    @param.where(BackupSolicitacao) where?: Where<BackupSolicitacao>,
  ): Promise<Count> {
    return this.backupSolicitacaoRepository.updateAll(backupSolicitacao, where);
  }

  @get('/backup-solicitacaos/{id}')
  @response(200, {
    description: 'BackupSolicitacao model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(BackupSolicitacao, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(BackupSolicitacao, {exclude: 'where'}) filter?: FilterExcludingWhere<BackupSolicitacao>
  ): Promise<BackupSolicitacao> {
    return this.backupSolicitacaoRepository.findById(id, filter);
  }

  @patch('/backup-solicitacaos/{id}')
  @response(204, {
    description: 'BackupSolicitacao PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BackupSolicitacao, {partial: true}),
        },
      },
    })
    backupSolicitacao: BackupSolicitacao,
  ): Promise<void> {
    await this.backupSolicitacaoRepository.updateById(id, backupSolicitacao);
  }

  @put('/backup-solicitacaos/{id}')
  @response(204, {
    description: 'BackupSolicitacao PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() backupSolicitacao: BackupSolicitacao,
  ): Promise<void> {
    await this.backupSolicitacaoRepository.replaceById(id, backupSolicitacao);
  }

  @del('/backup-solicitacaos/{id}')
  @response(204, {
    description: 'BackupSolicitacao DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.backupSolicitacaoRepository.deleteById(id);
  }
}
