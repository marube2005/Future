name = input("What is your name?")

if name.lower() == "jane":
    print("Hello, Jane!")
    age = int(input("How old are you?"))
    if age > 18:
        print("You are old enough to drive.")
    else:
        print("You are not old enough to drive")
else:
    print("Hello, stranger!")
    