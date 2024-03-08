/**
 * Unit tests on operations.js.
 *
 * @see https://jestjs.io/docs/en/expect
 * @see https://github.com/jest-community/jest-extended#api
 * @author Tim Malone <tdmalone@gmail.com>
 */

'use strict';

const operations = require( '../src/operations' );

it( 'exports constants for operations', () => {
  expect( operations.operations )
    .toBeObject()
    .toHaveProperty( 'PLUS' )
    .toHaveProperty( 'MINUS' )
    .toHaveProperty( 'SELF' );
});

describe( 'getOperationName', () => {

  it( 'returns \'plus\' when given +', () => {
    expect( operations.getOperationName( '+' ) ).toBe( 'plus' );
  });

  it( 'returns \'minus\' when given -', () => {
    expect( operations.getOperationName( '-' ) ).toBe( 'minus' );
  });

  it( 'returns false when given an invalid operation', () => {
    expect( operations.getOperationName( 'some invalid operation' ) ).toBeFalse();
  });

});
