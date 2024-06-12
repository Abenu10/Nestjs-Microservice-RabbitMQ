import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {ConfigModule}  from '@nestjs/config'
import {MongooseModule}  from '@nestjs/config'
import { DatabaseModule } from '@app/common';
import { Order,OrderSchema} from './schema/order.schema'
import * as Joi from 'joi'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/order/.env',
    }),
    DatabaseModule,
    Mongoosimport.forFeature({name : Order.name, schema: OrderSchema})
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
