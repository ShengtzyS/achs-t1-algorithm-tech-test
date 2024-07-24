import { describe, expect, test } from 'vitest';
import { getRevalidateProcessPendingDays } from './revalidate-provess-pending-days.js';

describe(getRevalidateProcessPendingDays, () => {
	test('revalidateProcessLastExecutionDayOfMonth < mainProcessLastExecutionDayOfMonth && today - warm-up days === mainProcessLastExecutionDayOfMonth', () => {
		
		// prepare
		const today = 17; 
		const mainProcessLastExecutionDayOfMonth = 15;
		const revalidateProcessLastExecutionDayOfMonth = 10;
		const expected = [11, 12, 13, 14, 15]; 
	
		// act
		const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth, revalidateProcessLastExecutionDayOfMonth);
	
		// assert
		expect(result).toStrictEqual(expected);
	});
	

    test('revalidateProcessLastExecutionDayOfMonth < mainProcessLastExecutionDayOfMonth && today - warm-up days > mainProcessLastExecutionDayOfMonth', () => {
        
		// prepare
        const today = 18;
        const mainProcessLastExecutionDayOfMonth = 15;
        const revalidateProcessLastExecutionDayOfMonth = 10;
        const expected = [11, 12, 13, 14, 15]; 

        // act
        const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth, revalidateProcessLastExecutionDayOfMonth);

        // assert
        expect(result).toStrictEqual(expected);
    });

	test('revalidateProcessLastExecutionDayOfMonth === mainProcessLastExecutionDayOfMonth && today - warm-up days > mainProcessLastExecutionDayOfMonth', () => {
		
		// prepare
		const today = 18; 
		const mainProcessLastExecutionDayOfMonth = 15;
		const revalidateProcessLastExecutionDayOfMonth = 15;
		const expected = [16, 17, 18]; 
	
		// act
		const result = getRevalidateProcessPendingDays(today, mainProcessLastExecutionDayOfMonth, revalidateProcessLastExecutionDayOfMonth);
	
		// assert
		expect(result).toEqual(expected);
	});
});
