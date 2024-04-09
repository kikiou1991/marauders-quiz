"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

interface Answer {
  answer: string;
  correct: boolean;
  id: number;
}

const QuizArea: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([
    {
      answer: "",
      correct: false,
      id: 0,
    },
  ]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const dummyQuestion = "Who is the oldest?";

  const dummyAnswer: Answer[] = [
    { answer: "Harry", correct: false, id: 1 },
    { answer: "Ron", correct: true, id: 2 },
    { answer: "Hermione", correct: false, id: 3 },
    { answer: "Ginny", correct: false, id: 4 },
  ];
  useEffect(() => {
    setAnswers(dummyAnswer);
    setQuestion(dummyQuestion);
  }, []);

  const checkAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    const correct = answers.find((a) => a.answer === answer)?.correct;
    if (correct) {
      setScore(score + 1);
    }
  };

  const getBackgroundColor = (answer: string): string => {
    if (selectedAnswer === answer) {
      const correct = answers.find((a) => a.answer === answer)?.correct;
      return correct ? "bg-green-200" : "bg-red-200";
    }
    return "bg-slate-200";
  };
  const getHoverColor = (answer: string): string => {
    if (selectedAnswer === answer) {
      const correct = answers.find((a) => a.answer === answer)?.correct;
      return correct ? "hover:bg-green-300" : "hover:bg-red-300";
    }
    return "hover:bg-slate-300";
  };

  return (
    <div className="flex w-full h-full items-center justify-center">
      <Card className="flex w-[650px] h-[300px] ">
        <CardContent className="flex flex-row w-full items-center gap-5">
          <div className="w-1/2 flex text-2xl font-semibold h-full justify-center items-center">
            {question}
          </div>
          <div className="w-1/2 flex flex-col gap-4 h-full justify-center items-start">
            {answers.map((answer) => (
              <div key={answer.id} className="flex flex-row gap-2 ">
                <Button
                  onClick={() => checkAnswer(answer.answer)}
                  disabled={selectedAnswer !== null}
                  className={`${getBackgroundColor(
                    answer.answer
                  )} w-[300px] text-black text-xl p-3 rounded-lg ${getHoverColor(
                    answer.answer
                  )} hover:cursor-pointer`}
                >
                  {answer.answer}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizArea;
