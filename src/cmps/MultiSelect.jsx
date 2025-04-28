import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function MultiSelect({ options, value, onChange }) {
    //   const fixedOptions = [top100Films[6]];
    //   const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);

    return (
        <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue)
            }}
            options={options}
            getOptionLabel={(option) => option}
            renderValue={(values, getItemProps) =>
                values.map((option, index) => {
                    const { key, ...itemProps } = getItemProps({ index })
                    return (
                        <Chip
                            key={key}
                            label={option}
                            {...itemProps}
                            // disabled={fixedOptions.includes(option)}
                        />
                    )
                })
            }
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Labels" placeholder="Select label" />
            )}
        />
    )
}
