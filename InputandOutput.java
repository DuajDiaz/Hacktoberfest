import java.util.Scanner;

class InputandOutput {
    public static void main(String[] args) {

        // We create an object of Scanner class which has many methods of Scanning the
        // user input

        Scanner object = new Scanner(System.in);

        System.out.println("Enter integer");

        // creating integer variable to allocate the integer from user input through
        // nextInt()

        int num = object.nextInt();

        System.out.println("Enter float number");

        // creating float variable to allocate the float from user input through
        // nextFloat()

        float fnum = object.nextFloat();

        System.out.println("Enter double");

        // to read leftover line from input terminal
        object.nextLine();

        // creating double variable to allocate the double from user input through
        // nextLine() to avoid cursor problem to scan string

        double dnum = Double.parseDouble(object.nextLine());

        System.out.println("Enter String");

        // creating String variable to allocate the String from user input through
        // nextLine()

        String S = object.nextLine();

        // printing the objects to user using System.out.print(), System.out.println() :
        // which print every next occuring print statement in new line
        System.out.println("integer : " + num);
        System.out.println("float : " + fnum);
        System.out.println("double : " + dnum);

        System.out.println("String  : " + S);
        // after using the Scanner class object we need to close the scanner to aoid
        // garbage collection

        object.close();

    }
}