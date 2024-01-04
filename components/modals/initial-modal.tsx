"use client"

import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"

export const InitialModal = () => {
    return (
        <Dialog open={true}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogTitle className="pt-8 px-6">
                    
                </DialogTitle>
            </DialogContent>
        </Dialog>
    )
};