class ListNode {
    val;
    next;
    constructor(val,next = null){
        this.val = val;
        this.next = next;
    }
}
class TestClass{
    head;
    constructor(head=null){
        this.head=head;
    };


    hasLast() {
        return this.head !== null;

    }

    getLast(){
        if(!this.hasLast()) {
            return null;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        let finalvalue = current.val;

        current = this.head;
        while (current.next !== null && current.next.next !== null){
            current = current.next;
        }
        if(current.next === null){
            this.head = null;
        }
        current.next = null;
        return finalvalue;
    }
}

let myVariable = new TestClass(
    new ListNode(1, new ListNode(2,new ListNode(3,new ListNode(4, new ListNode(5))))));
    console.log(myVariable.getLast());
      console.log(myVariable.getLast());
        console.log(myVariable.getLast());
          console.log(myVariable.getLast());
            console.log(myVariable.getLast());
                console.log(myVariable.getLast());
                