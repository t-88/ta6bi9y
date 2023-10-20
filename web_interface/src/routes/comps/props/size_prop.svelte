<TemplateProp title={"Size"}>
    <div>

        <section>
            <InputField placeholder="H" max_chars={3} value={0} on_change_callback={change_aspect_ratio} />
            <InputField placeholder="W" max_chars={3} value={0} on_change_callback={change_aspect_ratio} />
        </section>
        <InputField placeholder="Aspect ratio" max_chars={4} value={'16:9'} on_change_callback={change_aspect_ratio} />

    </div>
</TemplateProp>


<script>
    import TemplateProp from "./template_prop.svelte";
    import InputField from "../ui/input_field.svelte";

    function change_aspect_ratio(value) {
    }
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