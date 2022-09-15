import { Injectable } from "@nestjs/common";
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GetQuestionsService {
    getQuestions(){
        let questions = [
            {
                q:'Which of the following is another name for Software Piracy?',
                a: 'Pirates',
                b: 'SOPA',
                c: 'Copyright Infringement of Software',
                d: 'SOSA',
            },
            {
                q:"What is 'torrenting'?",
                a: 'The file type for programs such as Bittorrent to open to obtain illegal files',
                b: 'A file in which it stores your browsing history on your computer.',
                c: 'Visiting a piracy website',
                d: 'Using your computer to remotely take over another computer unwillingly.',
            },
            {
                q:'Which of the following is a Cyberlocker site?',
                a: 'PirateBay',
                b: 'RapidShare',
                c: 'Youtube',
                d: 'DailyMotion',
            },
            {
                q: 'Which of the following countries has the highest rate of piracy?',
                a: 'Armenia',
                b: 'Canada',
                c: 'United States',
                d: 'China',
            },
            {
                q: 'Around the world, many websites are used for piracy, Which of the following is the most used?',
                a: 'torrent.com',
                b: 'IsoHunt',
                c: 'TorrentReactor',
                d: 'ThePirateBay',
            },
            {
                q: 'Around the world, Much of the data transfered using P2P networks are copyrighted. Which of the following percentages is the closest?',
                a: '92%',
                b: '52%',
                c: '33%',
                d: '99%',
            },
            {
                q: 'What is the percentage of softwares that are running worldwide and are downloaded illegally?',
                a: '52%',
                b: '49%',
                c: '42%',
                d: '73%',
            },
            {
                q: 'In 2010, the amount of software downloaded illegally was worth how much?',
                a: '23 Million Dollars',
                b: '32 Million Dollars',
                c: '59 Billion Dollars',
                d: '59 Million Dollars',
            },
            {
                q: 'In 2010, Which of the following movies was pirated the most on the internet?',
                a: 'Avatar',
                b: 'Kick-Ass',
                c: 'Inception',
                d: 'Iron Man 2',
            },
            {
                q: 'What is the most pirated piece of software on the Internet?',
                a: 'Windows Vista',
                b: 'Windows XP',
                c: 'Microsoft Office',
                d: 'Adobe Photoshop CS',
            },
            {
                q: 'In 2010, Second most popular movie was Batman: The Dark Knight. How many pirated downloads did it have?',
                a: '10 Million',
                b: '30 Million',
                c: '19 Million',
                d: '17 Million',
            },
            {
                q: 'In 2010, Many Video Games were pirated for use. Which of the following was the most pirated?',
                a: 'Tom Clancy HAWX',
                b: 'Call of Duty Modern Warfare 3',
                c: 'Call of Duty Black Ops',
                d: 'Battlefield 2 Bad Company',
            }
        ]
        return questions;
    }

    getHint(data){
        let hint = [
            {
                Hint: 'It is commonly called this by Government Officials.'
            },
            {
                Hint: 'It has to deal with certain types of files'
            },
            {
                Hint: 'A Cyberlocker site is one where you can store many files on a personal account.'
            },
            {
                Hint: "This country's president is named: Serzh Sargsyan"
            },
            {
                Hint: 'This website is based off of using Torrents.'
            },
            {
                Hint: 'It is significantly high.'
            },
            {
                Hint: 'This number was taken in 2010 and is less than 50%'
            },
            {
                Hint: 'The software downloaded illegally was worth quite a bit.'
            },
            {
                Hint: 'This movie was also one of the most popular movies in 2010.'
            },
            {
                Hint: 'This software is very commonly used for Graphics Design'
            },
            {
                Hint: 'Avatar, The most popular movie, had around 21 million downloads.'
            },
            {
                Hint:' Sorry no hint for that'
            }
        ]
        
        return hint[data.hint];
    }
    getAnswer(hisAnswer){
        let answer = [
            {
                an:'c',
            },
            {
                an: 'a',
            },
            {
                an: 'b',
            },
            {
                an : 'a',
            },
            {
                an: 'd',
            },
            {
                an: 'd',
            },
            {
                an: 'c',
            },
            {
                an: 'c',
            },
            {
                an : 'a',
            },
            {
                an : 'd',
            },
            {
                an: 'c',
            },
            {
                an: 'd',
            }
        ]
        if (hisAnswer.Ans == answer[hisAnswer.index])
         {
            return true;
         }
         else{
            return false;
         }
    }
}