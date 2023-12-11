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
import {Solicitacao} from '../models';
import {SolicitacaoRepository} from '../repositories';

export class SolicitacaoController {
  constructor(
    @repository(SolicitacaoRepository)
    public solicitacaoRepository : SolicitacaoRepository,
  ) {}

  @post('/solicitacaos')
  @response(200, {
    description: 'Solicitacao model instance',
    content: {'application/json': {schema: getModelSchemaRef(Solicitacao)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitacao, {
            title: 'NewSolicitacao',
            
          }),
        },
      },
    })
    solicitacao: Solicitacao,
  ): Promise<Solicitacao> {
    return this.solicitacaoRepository.create(solicitacao);
  }

  @get('/solicitacaos/count')
  @response(200, {
    description: 'Solicitacao model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Solicitacao) where?: Where<Solicitacao>,
  ): Promise<Count> {
    return this.solicitacaoRepository.count(where);
  }

  @get('/solicitacaos')
  @response(200, {
    description: 'Array of Solicitacao model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Solicitacao, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Solicitacao) filter?: Filter<Solicitacao>,
  ): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find(filter);
  }

  @patch('/solicitacaos')
  @response(200, {
    description: 'Solicitacao PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitacao, {partial: true}),
        },
      },
    })
    solicitacao: Solicitacao,
    @param.where(Solicitacao) where?: Where<Solicitacao>,
  ): Promise<Count> {
    return this.solicitacaoRepository.updateAll(solicitacao, where);
  }

  @get('/solicitacaos/{id}')
  @response(200, {
    description: 'Solicitacao model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Solicitacao, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Solicitacao, {exclude: 'where'}) filter?: FilterExcludingWhere<Solicitacao>
  ): Promise<Solicitacao> {
    return this.solicitacaoRepository.findById(id, filter);
  }

  @patch('/solicitacaos/{id}')
  @response(204, {
    description: 'Solicitacao PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitacao, {partial: true}),
        },
      },
    })
    solicitacao: Solicitacao,
  ): Promise<void> {
    await this.solicitacaoRepository.updateById(id, solicitacao);
  }

  @put('/solicitacaos/{id}')
  @response(204, {
    description: 'Solicitacao PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() solicitacao: Solicitacao,
  ): Promise<void> {
    await this.solicitacaoRepository.replaceById(id, solicitacao);
  }

  @del('/solicitacaos/{id}')
  @response(204, {
    description: 'Solicitacao DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.solicitacaoRepository.deleteById(id);
  }
}
