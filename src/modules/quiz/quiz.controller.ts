import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quiz: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quiz.getAllQuiz();
  }
}
