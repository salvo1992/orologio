class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class CircularDoublyLinkedList:
    def __init__(self):
        self.head = None

    def insert_end(self, data):
        new_node = Node(data)
        if self.head is None:
            new_node.next = new_node.prev = new_node
            self.head = new_node
        else:
            tail = self.head.prev
            tail.next = new_node
            new_node.prev = tail
            new_node.next = self.head
            self.head.prev = new_node


    def insert_after(self, key, data):
        if not self.head:
            return
        curr = self.head
        while True:
            if curr.data == key:
                new_node = Node(data)
                nxt = curr.next
                curr.next = new_node
                new_node.prev = curr
                new_node.next = nxt
                nxt.prev = new_node
                break
            curr = curr.next
            if curr == self.head:
                break


class CircularSinglyLinkedList:
    def __init__(self):
        self.head = None

    def delete_beginning(self):
        if not self.head:
            return
        if self.head.next == self.head:
            self.head = None
        else:
            temp = self.head
            curr = self.head
            while curr.next != self.head:
                curr = curr.next
            curr.next = self.head.next
            self.head = self.head.next
            temp = None


class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def delete_node(self, key):
        curr = self.head
        while curr:
            if curr.data == key:
                if curr.prev:
                    curr.prev.next = curr.next
                else:
                    self.head = curr.next
                if curr.next:
                    curr.next.prev = curr.prev
                break
            curr = curr.next
