import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllQuiz() {
    return { data: [1, 2, 3, 4] };
  }
}
