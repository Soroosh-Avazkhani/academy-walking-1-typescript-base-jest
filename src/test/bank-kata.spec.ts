import { Bank } from '../main/Bank';

const printStatement = jest.fn();

describe("bank-kata",() => {
    describe('when the balance is 0', () => {
        it("should throw an error when the customer withdraws", () => {
            const bank = new Bank(0, printStatement);
            expect(() => bank.withdraw(400)).toThrow('The balance is insufficient for the withdrawal request');
        })

        it("should deposit correct amount", () => {
            const bank = new Bank(10, printStatement);
            bank.deposit(300);

            expect(printStatement).toHaveBeenCalledWith(expect.objectContaining({
                balance: 310
            }));
        })
    })

    describe('when the balance is sufficient for a withdrawal', () => {
        it("should withdraw the correct amount", () => {
            const bank = new Bank(500, printStatement);
            
            bank.withdraw(400)

            bank.printStatement()
            expect(printStatement).toHaveBeenCalledWith(expect.objectContaining({
                balance: 100
            }));
        })
    })
})
