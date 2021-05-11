export interface BankBalance {
    checkBalance: () => number
    printStatement: (balance: {balance: number}) => void
} 

class Bank {
    constructor(private bankBalance: BankBalance) {
    }
    
    withdraw(amount: number) {
        throw new Error('The balance is insufficient for the withdrawal request')
    }

    printStatement() {

    }
}

export { Bank };