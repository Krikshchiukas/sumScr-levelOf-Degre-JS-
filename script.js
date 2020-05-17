// Lecture: Coding Task No 1

/*
**********************CODING TASK No 2*****************************
1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, 
    with the following values:
    a. John, 47, 46
    b. Bob, 23, 24
    c. Nick, 40, 35
    d. Alex, 44, 45

2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant
    to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees

3. Create function which will calculate total score (score1 + score2) for each student.

4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student 
    has passed an exam and what kind of degree he has got.

5. Display the final result in console.

*/

// SOLUTION:

// 1. array with 4 objects

/*
var students = [
     {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
     {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
     {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
]
//console.log(students[0]);


//2. Creating 2 arrays: scors and degrees

var scores = [91, 81, 71, 61, 51];

var degrees = ['A', 'B', 'C', 'D', 'E'];

//3. Creating function to calculate total score for each student

function totalScore(score1, score2){

   var sum = score1 + score2;

    return sum;

}

// 4.

function calcFinal() {

    for(var i = 0; i < students.length; i++) {

        students[i].sum = totalScore(students[i].score1, students[i].score2);

     if(students[i].sum >= 51) {

            console.log(students[i].name + '  passed final exam seccessufully');
            
            for(y = 0; y < scores.length; y++) {

                if(students[i].sum >= scores[y]) {
                    
                console.log('He has ' + students[i].sum + ' points and he got diplona with degree ' + degrees[y]);

                console.log('****************');
                  
                break;
                 }

             }

        } else {

            console.log(students[i].name + ' has got ' +  students[i].sum + ' points and has to try next year again.');

            console.log('--------------')

         }

    }
    
}

calcFinal();


/* output:
John  passed final exam seccessufully
He has 93 points and he got diplona with degree A
****************
Bob has got 47 points and has to try next year again.
--------------
Nick  passed final exam seccessufully
He has 75 points and he got diplona with degree C
****************
Alex  passed final exam seccessufully
He has 89 points and he got diplona with degree B
 ****************
*/



//How to invoke function methode
/*
var obj = {
    name: 'John',
    age: 26,
    job: 'instructor',
    myFunc: function() {
        console.log('Hello ' + obj.name);
    }
};
obj.myFunc();
*/



var students = [
    {
        name: 'John',
        score1: 47,
        score2: 46
    },
    {
        name: 'Bob',
        score1: 23,
        score2: 24
    },
    {
        name: 'Nick',
        score1: 40,
        score2: 35
    },
    {
        name: 'Alex',
        score1: 44,
        score2: 45
    }
];

///console.log(students);

var degrees = ['A', 'B', 'C', 'D', 'E'];
var scores = [91, 81, 71, 61, 51];

function calcSum(score1, score2) {

  var sum = score1 + score2;

    return sum;
};

function calcFinal() {

    for(var i = 0; i < students.length; i++) {

        students[i].sum = calcSum(students[i].score1, students[i].score2);
        
        if(students[i].sum >=51) {

            console.log(students[i].name + ' passed finale exam successufully.');
            
            for(var x = 0; x < scores.length; x++) {

                if(students[i].sum >= scores[x]) {

                    console.log('And he has ' + degrees[x] + ' with ' + students[i].sum + ' points.');
                    console.log('***************');
                    break;
                }
            }
        } else {
            console.log(students[i].name + ' fainled final exam.');
            console.log('----------------');

        }
    }
} 

calcFinal();