import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    postgresql: {schema: 'public', table: 'material_solicitacao'}
  }
})
export class MaterialSolicitacao extends Entity {
  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    id: 1,
    postgresql: {columnName: 'codigo_solicitacao', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigoSolicitacao: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    id: 2,
    postgresql: {columnName: 'codigo_material', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  codigoMaterial: number;

  @property({
    type: 'number',
    required: true,
    jsonSchema: {nullable: false},
    scale: 0,
    generated:  false,
    postgresql: {columnName: 'quantidade', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined},
  })
  quantidade: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MaterialSolicitacao>) {
    super(data);
  }
}

export interface MaterialSolicitacaoRelations {
  // describe navigational properties here
}

export type MaterialSolicitacaoWithRelations = MaterialSolicitacao & MaterialSolicitacaoRelations;
