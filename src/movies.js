// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((directors) => moviesArray.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const Spielberg = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') );
    return Spielberg.length;
 }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }

    const allScores = moviesArray.reduce(function (acc, scores){
        if (scores.score == undefined || '') {
            return acc;
        } else {
        return acc + scores.score;
    }
    }, 0);

    const avgScore = allScores / moviesArray.length;

    return Number(avgScore.toFixed(2));
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama') );

    if (!dramaMovies.length){
        return 0;
    }

    const dramaRating = scoresAverage(dramaMovies);
    return dramaRating;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
