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
import {SolicitacaoAprovada} from '../models';
import {SolicitacaoAprovadaRepository} from '../repositories';

export class SolicitacaoAprovadaController {
  constructor(
    @repository(SolicitacaoAprovadaRepository)
    public solicitacaoAprovadaRepository : SolicitacaoAprovadaRepository,
  ) {}

  @post('/solicitacao-aprovadas')
  @response(200, {
    description: 'SolicitacaoAprovada model instance',
    content: {'application/json': {schema: getModelSchemaRef(SolicitacaoAprovada)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitacaoAprovada, {
            title: 'NewSolicitacaoAprovada',
            
          }),
        },
      },
    })
    solicitacaoAprovada: SolicitacaoAprovada,
  ): Promise<SolicitacaoAprovada> {
    return this.solicitacaoAprovadaRepository.create(solicitacaoAprovada);
  }

  @get('/solicitacao-aprovadas/count')
  @response(200, {
    description: 'SolicitacaoAprovada model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SolicitacaoAprovada) where?: Where<SolicitacaoAprovada>,
  ): Promise<Count> {
    return this.solicitacaoAprovadaRepository.count(where);
  }

  @get('/solicitacao-aprovadas')
  @response(200, {
    description: 'Array of SolicitacaoAprovada model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SolicitacaoAprovada, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SolicitacaoAprovada) filter?: Filter<SolicitacaoAprovada>,
  ): Promise<SolicitacaoAprovada[]> {
    return this.solicitacaoAprovadaRepository.find(filter);
  }

  @patch('/solicitacao-aprovadas')
  @response(200, {
    description: 'SolicitacaoAprovada PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitacaoAprovada, {partial: true}),
        },
      },
    })
    solicitacaoAprovada: SolicitacaoAprovada,
    @param.where(SolicitacaoAprovada) where?: Where<SolicitacaoAprovada>,
  ): Promise<Count> {
    return this.solicitacaoAprovadaRepository.updateAll(solicitacaoAprovada, where);
  }

  @get('/solicitacao-aprovadas/{id}')
  @response(200, {
    description: 'SolicitacaoAprovada model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SolicitacaoAprovada, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(SolicitacaoAprovada, {exclude: 'where'}) filter?: FilterExcludingWhere<SolicitacaoAprovada>
  ): Promise<SolicitacaoAprovada> {
    return this.solicitacaoAprovadaRepository.findById(id, filter);
  }

  @patch('/solicitacao-aprovadas/{id}')
  @response(204, {
    description: 'SolicitacaoAprovada PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SolicitacaoAprovada, {partial: true}),
        },
      },
    })
    solicitacaoAprovada: SolicitacaoAprovada,
  ): Promise<void> {
    await this.solicitacaoAprovadaRepository.updateById(id, solicitacaoAprovada);
  }

  @put('/solicitacao-aprovadas/{id}')
  @response(204, {
    description: 'SolicitacaoAprovada PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() solicitacaoAprovada: SolicitacaoAprovada,
  ): Promise<void> {
    await this.solicitacaoAprovadaRepository.replaceById(id, solicitacaoAprovada);
  }

  @del('/solicitacao-aprovadas/{id}')
  @response(204, {
    description: 'SolicitacaoAprovada DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.solicitacaoAprovadaRepository.deleteById(id);
  }
}
