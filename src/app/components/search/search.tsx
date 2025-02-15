"use client"
import styles from "./search.module.css"
import cn from "classnames"
import SearchIcon from "./search.svg"
import { ISearchProps } from "./search.type"
import { Input } from "../input/input"
import { Button } from "../button/button"
import { BUTTON_VARIANT } from "../button/button.enum"
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation"

export function Search({className, ...props}:ISearchProps) {

    const [ search, setSearch ] = useState<string>("");
    const router = useRouter() 

    const getSearch = () => {
        router.push(`/search?q=${search}`);
    }

    const handleKeyDown = (event:KeyboardEvent) => {
         if(event.code === 'Enter') {
            getSearch();
            // setSearch("")
         }
    }

    const onchange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    // setSearch("")
    }

    return (
        <div className={cn(styles.inputWrapper, className || "")} {...props}>
        <Input onKeyDown={ handleKeyDown} value={search} onChange={onchange} type="text" className={cn(styles.inputSearch)} placeholder="Поиск..."/>
        <Button onClick={getSearch} className={cn(styles.searchIcon)} variant={BUTTON_VARIANT.PRIMARY}>
          <SearchIcon />
        </Button>
        </div>
    )
}


