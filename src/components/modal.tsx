import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface ModalProps {
    onClose: (isOpen: boolean) => void;
}

export function Modal({ onClose }: ModalProps) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Nova Transação</DialogTitle>
                <DialogDescription>Adicione uma nova transação</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
                <div>
                    <Label className="text-sm font-medium mb-1">Descrição</Label>
                    <Input className="w-full p-5" type="text" placeholder='Ex: Compra no mercado' />
                </div>

                <div>
                    <Label className="text-sm font-medium mb-1">Valor</Label>
                    <Input className="w-full p-5" type="number" placeholder="0,00" />
                </div>

                <div>
                    <Label className="text-sm font-medium mb-1">Categoria</Label>
                    <Select>
                        <SelectTrigger className="w-full p-5">
                            <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Alimentação">Alimentação</SelectItem>
                            <SelectItem value="Transporte">Transporte</SelectItem>
                            <SelectItem value="Hortifruti">Hortifruti</SelectItem>
                            <SelectItem value="Outros">Outros</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Label className="text-sm font-medium mb-1">Data</Label>
                    <div className="relative">
                        <Input
                            className="w-full p-5 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-3 [&::-webkit-calendar-picker-indicator]:top-1/2 [&::-webkit-calendar-picker-indicator]:-translate-y-1/2"
                            type="date"
                            placeholder="Data"
                        />
                    </div>
                </div>

                <Button className="w-full">Adicionar</Button>

                <Button
                    onClick={() => onClose(false)}
                    variant="outline"
                    className="w-full"
                >Cancelar</Button>
            </div>
        </DialogContent>
    )
}
