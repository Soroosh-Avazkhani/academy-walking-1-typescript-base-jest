class Bank {

    constructor(private balance: number, private printToStOut: (statement: { balance: number }) => void) {
    }

    withdraw(amount: number) {
        if (this.balance < amount)
            throw new Error('The balance is insufficient for the withdrawal request');
        this.balance = this.balance - amount
    }

    printStatement() {
        this.printToStOut({ balance: this.balance });
    }

    deposit(amount: number) {
        
    }
}

export { Bank };