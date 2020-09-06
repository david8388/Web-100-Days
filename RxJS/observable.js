// Observer Pattern

class Producer {
    constructor() {
        this.listeners = []
    }

    addListener(listener) {
        if (typeof listener === 'function' ) {
            this.listeners.push(listener)
        } else {
            throw new Error('listener must be function')
        }
    }

    removeListener(listener) {
        const result = this.listeners.filter(x => x !== listener)
        this.listeners = result
        return result
    } 

    notify(message) {
        this.listeners.forEach(listener => {
            listener(message)
        })
    }

}

const producer = new Producer()

const listener1 = (message) => {
    console.log(`Hi, I'm Listener1, Message is :${message}`);
}

const listener2 = (message) => {
    console.log(`Hi, I'm Listener2, Message is :${message}`);
}

producer.addListener(listener1)
producer.addListener(listener2)

producer.notify('This is a test message')

// The following code will cause an error
// const listener3 = 10
// producer.addListener(listener3) 


// Iterator Pattern

class Iterator {
    constructor(array) {
        this._arr = array
        this._index = 0
    }

    next() {
        return this._arr.length === this._index ?
        { value: undefined, done: true } : 
            { value: this._arr[this._index++], done: false }
    }

    map(callback) {
        const newIt = new Iterator(this._arr)
        return {
            next() {
                const { done, value } = newIt.next()
                return { 
                    value: done ? undefined : callback(value),
                    done
                }
            }
        }
    }

}


const iterator = new Iterator([1,2])
const newIterator = iterator.map(value => value + 3)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(newIterator.next());
console.log(newIterator.next());
console.log(newIterator.next());