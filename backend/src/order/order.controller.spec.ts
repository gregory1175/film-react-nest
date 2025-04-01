import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderDataDto } from './dto/order.dto';

describe('OrderController', () => {
  let controller: OrderController;
  let service: OrderService;

  const mockOrderService = {
    createOrder: jest.fn((dto: OrderDataDto) => ({
      id: '123',
      ...dto,
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [{ provide: OrderService, useValue: mockOrderService }],
    }).compile();

    controller = module.get<OrderController>(OrderController);
    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an order', () => {
    const dto: OrderDataDto = {
      tickets: [],
      phone: '1',
      email: '',
    };
    expect(controller.createOrder(dto)).toEqual({
      id: '123',
      ...dto,
    });
    expect(service.createOrder).toHaveBeenCalledWith(dto);
  });
});
