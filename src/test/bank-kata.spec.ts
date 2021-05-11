import { Bank, BankBalance } from '../main/Bank';

class MockBankBalance implements BankBalance {
    checkBalance = jest.fn()
    printStatement = jest.fn()
};

describe("bank-kata",() => {
    describe('when the balance is 0', () => {
        it("should throw an error when the customer withdraws", () => {
            const bankBalance = new MockBankBalance();
            const bank = new Bank(bankBalance);
            expect(() => bank.withdraw(400)).toThrow('The balance is insufficient for the withdrawal request');
        })
    })

    describe('when the balance is sufficient for a withdrawal', () => {
        it("should withdraw the correct amount", () => {
            const bankBalance = new MockBankBalance();
            const bank = new Bank(bankBalance);
            bankBalance.checkBalance.mockReturnValue(500);
            
            bank.withdraw(400)
            bank.printStatement()
            expect(bankBalance.printStatement).toHaveBeenCalledWith(expect.objectContaining({
                balance: 100
            }));
        })
    })
})
