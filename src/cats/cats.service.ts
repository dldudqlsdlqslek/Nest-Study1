import { Injectable } from '@nestjs/common';
import { Cat } from './interface/cat.interface';


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
    create(cat: Cat) {
        this.cats.push(cat);
        return 'This action adds a new cat';
    }

    findAll(): Cat[] {
        return this.cats;
    }

}
