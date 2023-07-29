"use client"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { languages } from '@/lib/languages';
export default function Options() {
    const handleLangaugeSelect = (code: string) => {
        console.info('You clicked the Chip.');
    };
    return (
        <div>
            <div>
                
            </div>
            <div>
                <p className="mb-3 ml-1 text-sm font-semibold">
                    Language:
                </p>
                <Stack direction="row" spacing={2}>
                    {
                        languages.map(({ title, code }, index) => {
                            return (
                                <Chip key={`${index}${code}`} variant='outlined' label={title} onClick={() => handleLangaugeSelect(code)} />
                            )
                        })
                    }
                </Stack>
            </div>
        </div>
    );
}