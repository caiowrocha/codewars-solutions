/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/


const switcheroo = x => [...x].map(e => e !== 'a' && e !== 'b' ? 'c' : e === 'a' ? 'b' : 'a').join('');