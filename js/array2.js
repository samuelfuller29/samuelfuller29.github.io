/* Defining Table
 * Input: no user input
 * Processing: Test the countEvens and multiply functions by calling them.
 * Output: The values returned from the countEvens and multiply functions.
 */
function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the countEvens function by calling it two times.
    let count1 = countEvens(list1);
    let count2 = countEvens(list2);

    // Test the multiply function by calling it two times.
    let mult1 = multiply(list1, 3);
    let mult2 = multiply(list2, 2);

    // Build a string to display to the user.
    let output =
            count1 + '<br>' +
            count2 + '<br>' +
            mult1 + '<br>' +
            mult2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

/*  This function goes through each index of the list.
    If the value of the index is evenly divisable by 2 it adds one to the count.
    After sorting through the entire list it returns the total count.
*/

function countEvens(list) {
    let count = 0;
    for (let i = 0;  i < list.length;  i++) {
        if (list[i] % 2 == 0) {
            count += 1;
        }
    }
    return count;
}


/*  This function goes through each index of the list.
    For each index it multiplies the value by the multiplier 
    and adds that number to the new list which is then returned.
    The if / else if allows the last index to end with a ] instead of the general ", "
*/

//  Also, I did adjust the copy/pasted code from the assignment 
//  by adding the multiplier as ", 3" and ", 2" to line 39/40 

function multiply(list, multiplier) {
    let newList ="[";
    for (let i = 0;  i < list.length;  i++) {
        if (i != list.length - 1) {
            newList += list[i] * multiplier + ", "
        }
        else if (i = list.length - 1) {
            newList += list[i] * multiplier + "]"
        }
    }
    return newList;
}



