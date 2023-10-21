<TemplateProp title={"Size"}>
    <div>
        <section>
            <InputField value={prop._x} placeholder="H" max_chars={3} on_change_callback={on_change_w_callback} />
            <InputField value={prop._y} placeholder="W" max_chars={3} on_change_callback={on_change_h_callback} />
        </section>
    </div>
</TemplateProp>


<script>
    import TemplateProp from "./template_prop.svelte";
    import InputField from "../ui/input_field.svelte";

    function on_change_w_callback(value) { prop._x = value; console.log(value); }
    function on_change_h_callback(value) { prop._y = value;}


    export let prop;

    
</script>


<style lang="scss">

    div {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        gap: 10px;
    }
    section  {
        display: flex;
        justify-content: space-between;
    }
</style>