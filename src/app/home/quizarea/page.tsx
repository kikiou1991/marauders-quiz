"use client";
import PlayersInGame from "@/components/playersInGame";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProgressLoader from "@/lib/helper-functions/progressloader";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Answer {
  answer: string;
  correct: boolean;
  id: number;
}
interface Question {
  question: string;
  answers?: Answer[];
  image?: string | undefined;
}

const QuizArea = () => {
  const [progress, setProgress] = useState<number>(0);
  const [totalQuestions, setTotalQuestions] = useState<number>(15);
  const [question, setQuestion] = useState<Question>({
    question: "",
    image: "",
  });
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([
    {
      answer: "",
      correct: false,
      id: 0,
    },
  ]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const dummyQuestion = {
    question: "Who is the youngest Weasley?",
    image:
      "https://images.unsplash.com/photo-1664700596250-0c0f4832ef98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  //   const currentQuestion: Question

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
    setProgress(progress + 1);
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
    <div className="relative flex md:flex-row gap-5 flex-col w-full h-full items-center justify-center">
      <PlayersInGame />
      <div className="flex flex-row  gap-2 absolute items-center md:bottom-[525px] top-[135px] w-[350px]">
        <div className="w-full absolute md:bottom-0 md:left-16 bottom-0 left-0 mb-5">
          <ProgressLoader value={progress} maxValue={totalQuestions} />
          <div className="absolute top-3 right-2">
            {progress + "/" + totalQuestions}
          </div>
        </div>
      </div>
      <Card className="flex md:w-[650px] md:h-[300px]  w-[370px]">
        <CardContent className="flex md:flex-row flex-col w-full items-center gap-5">
          <div className="w-[250px] flex flex-col gap-2 text-2xl font-semibold h-full justify-center items-center text-center">
            {question.question}
            {question.image && (
              <Image
                src={question?.image!}
                width={100}
                height={100}
                className="w-[240px] h-[160px] rounded-lg"
                alt="question"
              />
            )}
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 h-full justify-center items-start">
            {answers.map((answer) => (
              <div key={answer.id} className="flex flex-row gap-2 ">
                <Button
                  onClick={() => checkAnswer(answer.answer)}
                  disabled={selectedAnswer !== null}
                  className={`${getBackgroundColor(
                    answer.answer
                  )} w-[300px] text-black text-xl p-3 shadow-md shadow-slate-400 border-2 border-slate-300 rounded-lg ${getHoverColor(
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
