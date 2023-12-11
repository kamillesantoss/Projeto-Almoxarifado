import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'solicitacao_aprovada'}
  }
})
export class SolicitacaoAprovada extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    id: 1,
    postgresql: {columnName: 'codigo', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigo: number;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated:  false,
    postgresql: {columnName: 'data_solicitacao', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dataSolicitacao: string;

  @property({
    type: 'date',
    required: true,
    jsonSchema: {nullable: false},
    generated:  false,
    postgresql: {columnName: 'data_aprovacao', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO', generated: undefined},
  })
  dataAprovacao: string;

  @property({
    type: 'number',
    jsonSchema: {nullable: true},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'codigo_status', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined},
  })
  codigoStatus?: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'codigo_cliente', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigoCliente: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'codigo_adm_dpa', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigoAdmDpa: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SolicitacaoAprovada>) {
    super(data);
  }
}

export interface SolicitacaoAprovadaRelations {
  // describe navigational properties here
}

export type SolicitacaoAprovadaWithRelations = SolicitacaoAprovada & SolicitacaoAprovadaRelations;
