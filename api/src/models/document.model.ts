import {Entity, model, property} from '@loopback/repository';

@model()
export class Document extends Entity {
  @property({
    type: String,
    id: true,
    mongodb: {dataType: 'ObjectID'},
    generated: true,
    description: 'Unique identifier of a document',
  })
  id?: String;

  @property({
    type: 'string',
    required: true,
    description: 'Title of a document',
  })
  title: string;

  @property({
    type: 'string',
    required: true,
    description: 'Type of a document (e.g. editor)',
  })
  docType: string;

  @property({
    type: 'string',
    description: 'Description of a document',
  })
  desc: string;


  constructor(data?: Partial<Document>) {
    super(data);
  }
}

export interface DocumentRelations {
  // describe navigational properties here
}

export type DocumentWithRelations = Document & DocumentRelations;
