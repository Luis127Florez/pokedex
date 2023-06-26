import { Injectable } from '@nestjs/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Poquemons extends Document {
  @Prop({ unique: true, index: true })
  name: string;
  @Prop({ unique: true, index: true })
  No: number;
}
export const PoquemonSchema = SchemaFactory.createForClass(Poquemons);
