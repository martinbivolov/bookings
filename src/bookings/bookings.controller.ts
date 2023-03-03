import {Body,Controller,Delete,Get,Param,Post,Put,} from '@nestjs/common';
  import { BookingsService } from './bookings.service';
  import { Booking } from './entities/booking.entity';
  import { BookingDto } from './entities/booking.dto';
  
  @Controller('bookings')
  export class BookingsController {
    constructor(private bookingService: BookingsService) {}
  
    @Get()
    findAll() {
      return this.bookingService.findAll();
    }
  
    @Get(':id')
    findById(@Param('id') id) {
      return this.bookingService.findById(id);
    }
    @Post()
    create(@Body() bookingDto: BookingDto): Promise<Booking> {
      return this.bookingService.create(bookingDto);
    }
    @Put(':id')
    update(@Param('id') id, @Body() bookingDto: BookingDto): Promise<Booking> {
      return this.bookingService.update(id, bookingDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id) {
      return this.bookingService.delete(id);
    }
  }
  