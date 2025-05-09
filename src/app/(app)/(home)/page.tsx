import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
    return (
        <div className={"min-h-screen flex justify-center items-center"}>
            <div className={"flex flex-col gap-4 w-48"}>
                <Button>This is a button</Button>
                <Input placeholder={"This is a input"}/>
            </div>
        </div>
    );
}
