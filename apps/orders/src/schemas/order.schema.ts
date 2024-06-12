import { AbstractDocument } from "@app/common";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";


@Schema({ versionKey: false })
export class Order extends AbstractDocument{
    @Prop()
    name : string;

    @Prop()
    price : string;

    @Prop()
    phoneNumber : string;
}

export const OrderSchema = SchemaFactory.createForClass(Order)