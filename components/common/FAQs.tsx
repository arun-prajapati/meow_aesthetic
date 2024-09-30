import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FaqList } from "@/lib/hooks/Faq";
import { Skeleton } from "../ui/skeleton";

export function AccordionDemo() {

    //api
    const { listOffaq_list } = FaqList()

    return (
        <>
            <Accordion type="single" collapsible className="w-full">
                {listOffaq_list?.length > 0 ? listOffaq_list?.map((FaqList, FaqIndex) => (
                    <AccordionItem value="item-1" key={FaqIndex}>
                        <AccordionTrigger>
                            {FaqList?.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {FaqList?.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))
                    :
                    <Skeleton className="rounded-lg h-[20px] w-[250px] bg-slate-200" />
                }
            </Accordion>
        </>
    )
}
